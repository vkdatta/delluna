export const name="rocket";
export const id="dl_8b002699c8034800bbf7";
export const url=new URL("../../icons/R/rocket.svg?v=c7f97a562b9da6b8c05e6e6ca7f0af5c63a3bbb93b56d468a58955b70efa651d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

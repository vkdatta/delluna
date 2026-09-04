export const name="instagram-logo-light";
export const id="dl_f5272735f3fb44528515";
export const url=new URL("../../icons/I/instagram-logo-light.svg?v=29f8ac5ccad40991a636719521538dd314e6fd2d948f966f98eb894df1e0911c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

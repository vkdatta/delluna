export const name="church";
export const id="dl_b5bb3dd4dc704ceeb94a";
export const url=new URL("../../icons/C/church.svg?v=28951c5590cee26a87f13b4230e350ece54fc5cccbbbc38708573f9fda390577",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

export const name="linux-logo";
export const id="dl_b898449c5eab4fd5ae66";
export const url=new URL("../../icons/L/linux-logo.svg?v=98d671ac52a3f495a3047b117fa7ad19fb210c701efffdba41cf618b0f4ef3d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}

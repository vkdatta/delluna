export const name="notepad-fill";
export const id="dl_e84b1dee0eab4a0abda8";
export const url=new URL("../icons/notepad-fill.svg?v=b38b4fd2ef83f1a89925e0ada0b5358ca25adce91ba711668cf4430e208c0f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

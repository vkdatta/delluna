export const name="eraser_size_1";
export const id="dl_e1c0ca69a0ba63c56f6c";
export const url=new URL("../icons/eraser_size_1.svg?v=0a545c0a459e891ae97e2e9ea9f625b7db084621dfe857f2ee94f1a5412a64c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

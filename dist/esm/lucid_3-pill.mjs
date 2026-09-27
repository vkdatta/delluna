export const name="lucid_3-pill";
export const id="dl_6f494a8475a143478ff4";
export const url=new URL("../icons/lucid_3-pill.svg?v=e00c292ce7d393875aa8c4f88ef2ed3258da0d9f6f4a3987a4a4fdfa0351dca7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

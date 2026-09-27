export const name="laptop_chromebook";
export const id="dl_5f70ac46eb663d1f4cbf";
export const url=new URL("../icons/laptop_chromebook.svg?v=574e3d4b0842e8a3d1aa417177005fb958963cd80398fc6b5c36937343da7eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

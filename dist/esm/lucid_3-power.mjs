export const name="lucid_3-power";
export const id="dl_4559f4e6212549589861";
export const url=new URL("../icons/lucid_3-power.svg?v=4f07650ccf37048aa08e246cd18c54c5071253693101cbb120f9bbc2a925dc21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

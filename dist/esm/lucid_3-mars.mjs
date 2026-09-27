export const name="lucid_3-mars";
export const id="dl_69590391d9514ebeaed0";
export const url=new URL("../icons/lucid_3-mars.svg?v=c57202bf3be7121e4a1cec2f38a1fb149bf87aae8541496550d3cc140f01429d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

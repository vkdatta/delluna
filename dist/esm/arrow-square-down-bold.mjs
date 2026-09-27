export const name="arrow-square-down-bold";
export const id="dl_31928d9ac65a473b8f8d";
export const url=new URL("../icons/arrow-square-down-bold.svg?v=07107b6b7079b66e5808dac95a53de27f5e58b4fc5eed068c716ea7cd21713ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

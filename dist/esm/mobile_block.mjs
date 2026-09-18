export const name="mobile_block";
export const id="dl_6ead97ece4ee46db8b31";
export const url=new URL("../icons/M/mobile_block.svg?v=669c5b4a86e301bbf32575067be1b7689aefc59c879c60f32e4097a5d61a581c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

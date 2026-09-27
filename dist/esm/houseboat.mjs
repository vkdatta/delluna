export const name="houseboat";
export const id="dl_c95755b5a5b43ecf4442";
export const url=new URL("../icons/houseboat.svg?v=512cae52eeed41510e095b1b872b48ef8f4522f803f9b7d9837ea37f1e72ea5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

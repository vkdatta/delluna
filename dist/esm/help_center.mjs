export const name="help_center";
export const id="dl_26ff93b65d01f49e69ac";
export const url=new URL("../icons/help_center.svg?v=0281e7e5554d054ebc0ce6d09cf8cb34ed2ee9fd042c4e652b1acda690ff1573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

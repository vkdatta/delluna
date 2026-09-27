export const name="text-h-thin";
export const id="dl_fcfb0926a43ab7672e5b";
export const url=new URL("../icons/text-h-thin.svg?v=6d5ee641bc6e926035d94376f65deefd4cd300cd28a98fa4adc2c319ac278e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

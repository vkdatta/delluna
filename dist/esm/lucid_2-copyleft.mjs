export const name="lucid_2-copyleft";
export const id="dl_26485cd3c5374476abdd";
export const url=new URL("../icons/lucid_2-copyleft.svg?v=87847daa2a089fbffde93d513f2bec0e441c7040b99e6df5915f76477aaa131e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

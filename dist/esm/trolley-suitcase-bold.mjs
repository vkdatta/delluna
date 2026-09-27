export const name="trolley-suitcase-bold";
export const id="dl_6fcf951e1be76b97e6b8";
export const url=new URL("../icons/trolley-suitcase-bold.svg?v=b1ec4af0b6264c06891145eb86a68fc4fda70ce144150763df724e009b9b12d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

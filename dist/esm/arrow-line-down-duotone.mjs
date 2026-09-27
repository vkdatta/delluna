export const name="arrow-line-down-duotone";
export const id="dl_9e363e3742924de680a2";
export const url=new URL("../icons/arrow-line-down-duotone.svg?v=74c79d54827742b885b181114e44537d30de4c7f45756296f675d4afb8523589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

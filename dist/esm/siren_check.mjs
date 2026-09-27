export const name="siren_check";
export const id="dl_4b31826c1f4de6cebe84";
export const url=new URL("../icons/siren_check.svg?v=3e4b3c7276990159b7899db131745ba5d115f303daacfa8f9f23dd88418fead8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="check-circle-thin";
export const id="dl_9f397684c7f34ae6b59b";
export const url=new URL("../icons/check-circle-thin.svg?v=32513140c22ab2cf7fc24e71c873c8cd16f5562ae9995724d7de62d0c5133de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

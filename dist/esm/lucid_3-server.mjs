export const name="lucid_3-server";
export const id="dl_4bf1c2910add4c23a4b7";
export const url=new URL("../icons/lucid_3-server.svg?v=e66090b5b97f2e1e9adf846ba63caae02ba15473a53a53e0a1c3160314d83291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

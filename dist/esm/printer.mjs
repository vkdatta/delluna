export const name="printer";
export const id="dl_5511a9dead514b528e2d";
export const url=new URL("../icons/printer.svg?v=e49497cdb0d89a2d2f71b4b01f5f575f904df51a797fbb18860ec57c03c99cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

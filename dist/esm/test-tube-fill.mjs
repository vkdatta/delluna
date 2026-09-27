export const name="test-tube-fill";
export const id="dl_f9bf996a36841b5bd356";
export const url=new URL("../icons/test-tube-fill.svg?v=33a1211866c31c620e5c0af8a48745d77e1fbe510b0564aa92d9e94c5373835f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

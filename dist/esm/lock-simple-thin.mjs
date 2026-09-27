export const name="lock-simple-thin";
export const id="dl_125129685fc3453fa2f8";
export const url=new URL("../icons/lock-simple-thin.svg?v=245c5cd9c6ca6b30cb59eb683987b52c40b5976bd0aa036a019c4dad1581c97a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

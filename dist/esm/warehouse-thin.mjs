export const name="warehouse-thin";
export const id="dl_ecffe6147cff2a52580a";
export const url=new URL("../icons/warehouse-thin.svg?v=9d93f6fdb1403b95b5ee7cecf9439e0b53a8c437fe5837ad15857fb8c852293c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

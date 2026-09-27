export const name="deployed_code_alert";
export const id="dl_5d997c57d91aa9bb19cd";
export const url=new URL("../icons/deployed_code_alert.svg?v=21e3db45a004dadb0448231d3dcf9bd643f90e55e3bbf24d9f749aa74ea55d67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

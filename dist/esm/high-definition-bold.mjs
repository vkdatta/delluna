export const name="high-definition-bold";
export const id="dl_4f3ae9328a024202aab2";
export const url=new URL("../icons/high-definition-bold.svg?v=0d50fc0964b17a9e368ebe3c5896580e1ad0a7d7132f835b87eb337b146d7280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

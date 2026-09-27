export const name="paint-roller-bold";
export const id="dl_b057d176e86943b791d7";
export const url=new URL("../icons/paint-roller-bold.svg?v=b1aa08ddbc097a906953a57ecc6ec2e67d88c06e28cb63a880fb02e688dff405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

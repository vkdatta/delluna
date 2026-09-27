export const name="rectangle-dashed-bold";
export const id="dl_a5210cfbe77b47639ab5";
export const url=new URL("../icons/rectangle-dashed-bold.svg?v=4cc95198ec341469ac13044e5008944f4fc0d836b352bc9542ac0d7b7fc13380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

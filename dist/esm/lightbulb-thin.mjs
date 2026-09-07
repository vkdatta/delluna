export const name="lightbulb-thin";
export const id="dl_4595c6a6718b4428b75a";
export const url=new URL("../icons/lightbulb-thin.svg?v=c264366f1be7c07e116f55239d37132b6ec2000119787e0ccf7d31ab8fc99b68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

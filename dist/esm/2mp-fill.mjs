export const name="2mp-fill";
export const id="dl_549348cd586d16e73c65";
export const url=new URL("../icons/2mp-fill.svg?v=39f3bb6b92b367acb2932dbddf2f6f0794998b84c77ec2660f306a89fa607e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

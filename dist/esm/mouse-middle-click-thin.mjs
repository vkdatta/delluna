export const name="mouse-middle-click-thin";
export const id="dl_1b33f41c7ede4604adcb";
export const url=new URL("../icons/mouse-middle-click-thin.svg?v=fa2090e026de072508bca706767cbb7ebeed17558f883c0fa3c38ec2f083dcad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

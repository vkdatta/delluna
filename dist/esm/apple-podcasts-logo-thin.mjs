export const name="apple-podcasts-logo-thin";
export const id="dl_3e9dd5bbe9d442e9aef1";
export const url=new URL("../icons/apple-podcasts-logo-thin.svg?v=f16f593a0c96c23585e969244b086ba74fdc168c4fc43f8bd47e85aa9bfb0c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

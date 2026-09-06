export const name="cigarette-thin";
export const id="dl_48f6c7394d45488e9921";
export const url=new URL("../icons/cigarette-thin.svg?v=5c19b35080bd78998671afac8328e9d58fa453a21c4146b91460736f19d489ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

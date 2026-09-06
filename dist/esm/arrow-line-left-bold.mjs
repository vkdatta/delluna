export const name="arrow-line-left-bold";
export const id="dl_020ce0c19c394217bf41";
export const url=new URL("../icons/arrow-line-left-bold.svg?v=67e209eb5263f873cb230ebfc9974b5bfe56dd4cd96d615796481a21c0f9b47e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

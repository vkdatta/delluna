export const name="battery-vertical-full";
export const id="dl_2b0f40cf80294679878f";
export const url=new URL("../icons/battery-vertical-full.svg?v=62c788e9b8e5a4c919f2dfe0c7472847d9113d910f882a51b93f97f5fd858434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

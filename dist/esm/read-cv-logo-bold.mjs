export const name="read-cv-logo-bold";
export const id="dl_bad318bb5fe248559d86";
export const url=new URL("../icons/read-cv-logo-bold.svg?v=1a2f51422468f1aeaf1777fd6e1f6255eb770d01162ab376115bd5225ecd0526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

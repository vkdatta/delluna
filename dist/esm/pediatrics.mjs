export const name="pediatrics";
export const id="dl_4c7e8163b9c59961a487";
export const url=new URL("../icons/pediatrics.svg?v=b0a70aad0e0debbe927b9e5a100dbca2f4d67b9e6ff324af353e24459ec4de05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lastfm-logo";
export const id="dl_ce99faf114b94aa0a802";
export const url=new URL("../icons/lastfm-logo.svg?v=9b07a1dfebb7ec2304fc101ecb70583de017211c2fbb3167d74ffce2c4fa80c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

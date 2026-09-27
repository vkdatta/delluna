export const name="reminder";
export const id="dl_858c784e8c1ef5a4dcf9";
export const url=new URL("../icons/reminder.svg?v=f20940e33252a32cf45efebce4d09bc36d9efa149c5720387b0a48c3d4bbdafd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="tooth-bold";
export const id="dl_70e6061475d546eed870";
export const url=new URL("../icons/tooth-bold.svg?v=5ff0c4bd1a57715a21c7707a689d658b95bb74c92e6185a59bcdd2b8981bd3aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

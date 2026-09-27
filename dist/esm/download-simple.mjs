export const name="download-simple";
export const id="dl_886e088d2de3444db262";
export const url=new URL("../icons/download-simple.svg?v=eab4a55953e32a06ba0fd60c5a703f71fff6678a99bd2fa17dceb809f4ff9046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

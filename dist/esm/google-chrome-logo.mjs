export const name="google-chrome-logo";
export const id="dl_ad8120c7602f4c8b9abb";
export const url=new URL("../icons/google-chrome-logo.svg?v=dab1027b347836ea490a70272b89726bee86e501bc83aede6b45f214fe804cb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

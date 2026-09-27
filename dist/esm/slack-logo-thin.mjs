export const name="slack-logo-thin";
export const id="dl_3b35fb06497f69fe5f76";
export const url=new URL("../icons/slack-logo-thin.svg?v=09d67967af42a72df68077ee4f871e5473ed94cbe41d763cc2d0a85ff79b3a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="arrow-arc-right-thin";
export const id="dl_f787fb8f66cf4e0e8f0d";
export const url=new URL("../icons/arrow-arc-right-thin.svg?v=e09be4d0a393f2ead4b49096183e631d5371d19822d7ea62b1eba9ea61bcbd43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

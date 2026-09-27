export const name="mask-happy-thin";
export const id="dl_f503fd7bc18549d5a57d";
export const url=new URL("../icons/mask-happy-thin.svg?v=b265e555b8d907c86e22f24c35b4db8f43a2bd55eecca4b156f927d937450263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

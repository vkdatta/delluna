export const name="sports_baseball";
export const id="dl_3a42b3864f3154b20a27";
export const url=new URL("../icons/sports_baseball.svg?v=92c720740216fac2269871d00574b951c494aa99811e8c7ddb838fb969d7567c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

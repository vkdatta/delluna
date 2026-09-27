export const name="airplane-landing-thin";
export const id="dl_6761693623a7406ca286";
export const url=new URL("../icons/airplane-landing-thin.svg?v=a770d84d1ad5692c3e0d53c19ccbcfc399959e37fefd73da32a155c6bb9bc1ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="emergency_home";
export const id="dl_4b70a9ad34f1754c4a5e";
export const url=new URL("../icons/emergency_home.svg?v=a45bba838d13b61e63993f4fc161682789f3edf4c1896e5852b7ec7632901845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

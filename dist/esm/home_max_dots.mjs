export const name="home_max_dots";
export const id="dl_56d2c9bafeb81016fc69";
export const url=new URL("../icons/home_max_dots.svg?v=37c52ede7fc84c828cb5857641faa1cfea921d85a83e57761a611f83144043ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

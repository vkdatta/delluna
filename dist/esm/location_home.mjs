export const name="location_home";
export const id="dl_980b91f2d113469a99fa";
export const url=new URL("../icons/location_home.svg?v=17d1d301e98eaa8333e1951fc0593214146eb8dc35dea2f45c1ee2bcc809f9e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

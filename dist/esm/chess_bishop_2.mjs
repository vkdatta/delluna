export const name="chess_bishop_2";
export const id="dl_b6a9d97d6168df696b0a";
export const url=new URL("../icons/chess_bishop_2.svg?v=ed0416f9e11342d964ef385b8debf6e944d37572896a3e16991721c22af90f56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

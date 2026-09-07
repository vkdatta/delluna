export const name="git-commit-light";
export const id="dl_ad5e2f6f9ce64dcda94e";
export const url=new URL("../icons/git-commit-light.svg?v=8e2e7c7780d2a13f1e82c2e1eefbad2efd699c7e7149b1279d80fb642b250834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

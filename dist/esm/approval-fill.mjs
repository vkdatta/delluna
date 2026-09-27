export const name="approval-fill";
export const id="dl_626112768e0bda5661ab";
export const url=new URL("../icons/approval-fill.svg?v=3e052ed86c425c6e37a469f07b26c88c59ac8fb79bac025dd74d6d942d827ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

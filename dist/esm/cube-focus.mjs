export const name="cube-focus";
export const id="dl_4dabd53fa39f48b4b105";
export const url=new URL("../icons/cube-focus.svg?v=d07e9d4bedf94f725c1886c97767b76c5d00c66cfab9e2a8b557a5d47d906105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

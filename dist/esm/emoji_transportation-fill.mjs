export const name="emoji_transportation-fill";
export const id="dl_2cffdf3fc58b08333365";
export const url=new URL("../icons/emoji_transportation-fill.svg?v=af56d49506c20e7cb24de500cf011017f5858ab5d4db208082ae94d2b58fc446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

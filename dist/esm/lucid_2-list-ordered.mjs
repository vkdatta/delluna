export const name="lucid_2-list-ordered";
export const id="dl_a50e8ee24484481880cc";
export const url=new URL("../icons/lucid_2-list-ordered.svg?v=063d7db583df0dade0df1786e94251826bb5337fb84c0f9336acd67465686b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
